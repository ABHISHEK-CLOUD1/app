#!/usr/bin/env python3
"""
Backend API Testing for Abhishek Mishra's Portfolio Website
Tests the contact form backend API implementation
"""

import requests
import json
import os
from datetime import datetime
import time

# Load environment variables
def load_env_file(file_path):
    env_vars = {}
    try:
        with open(file_path, 'r') as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith('#') and '=' in line:
                    key, value = line.split('=', 1)
                    # Remove quotes if present
                    value = value.strip('"\'')
                    env_vars[key] = value
    except FileNotFoundError:
        print(f"Environment file {file_path} not found")
    return env_vars

# Load frontend environment to get backend URL
frontend_env = load_env_file('/app/frontend/.env')
BACKEND_URL = frontend_env.get('REACT_APP_BACKEND_URL', 'http://localhost:8001')
API_BASE_URL = f"{BACKEND_URL}/api"

print(f"Testing backend at: {API_BASE_URL}")

class ContactAPITester:
    def __init__(self):
        self.base_url = API_BASE_URL
        self.test_results = []
        
    def log_test(self, test_name, success, message, details=None):
        """Log test results"""
        result = {
            'test': test_name,
            'success': success,
            'message': message,
            'details': details,
            'timestamp': datetime.now().isoformat()
        }
        self.test_results.append(result)
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status}: {test_name} - {message}")
        if details:
            print(f"   Details: {details}")
    
    def test_valid_contact_submission(self):
        """Test Case 1: Valid Contact Form Submission"""
        test_data = {
            "name": "Rajesh Kumar",
            "email": "rajesh.kumar@techcorp.com",
            "subject": "Web Development Inquiry",
            "message": "Hi Abhishek, I came across your portfolio and I'm impressed with your work. We have a project that might be a good fit for your skills. Could we schedule a call to discuss?"
        }
        
        try:
            response = requests.post(f"{self.base_url}/contact", json=test_data, timeout=10)
            
            if response.status_code in [200, 201]:
                response_data = response.json()
                
                # Verify response structure
                required_fields = ['id', 'name', 'email', 'subject', 'message', 'created_at', 'status']
                missing_fields = [field for field in required_fields if field not in response_data]
                
                if missing_fields:
                    self.log_test("Valid Contact Submission", False, 
                                f"Missing fields in response: {missing_fields}", response_data)
                else:
                    # Verify data integrity
                    data_match = all([
                        response_data['name'] == test_data['name'],
                        response_data['email'] == test_data['email'],
                        response_data['subject'] == test_data['subject'],
                        response_data['message'] == test_data['message']
                    ])
                    
                    if data_match:
                        self.log_test("Valid Contact Submission", True, 
                                    f"Contact created successfully with ID: {response_data['id']}", 
                                    f"Status: {response.status_code}")
                        return response_data['id']
                    else:
                        self.log_test("Valid Contact Submission", False, 
                                    "Response data doesn't match input data", response_data)
            else:
                self.log_test("Valid Contact Submission", False, 
                            f"Unexpected status code: {response.status_code}", response.text)
                
        except requests.exceptions.RequestException as e:
            self.log_test("Valid Contact Submission", False, f"Request failed: {str(e)}")
        except Exception as e:
            self.log_test("Valid Contact Submission", False, f"Unexpected error: {str(e)}")
        
        return None
    
    def test_retrieve_contact_messages(self):
        """Test Case 2: Retrieve Contact Messages"""
        try:
            response = requests.get(f"{self.base_url}/contact", timeout=10)
            
            if response.status_code == 200:
                contacts = response.json()
                
                if isinstance(contacts, list):
                    self.log_test("Retrieve Contact Messages", True, 
                                f"Successfully retrieved {len(contacts)} contact messages")
                    
                    # Check if messages are sorted by created_at (newest first)
                    if len(contacts) > 1:
                        timestamps = [contact.get('created_at') for contact in contacts if contact.get('created_at')]
                        if len(timestamps) > 1:
                            # Check if sorted in descending order (newest first)
                            is_sorted = all(timestamps[i] >= timestamps[i+1] for i in range(len(timestamps)-1))
                            if is_sorted:
                                self.log_test("Message Sorting", True, "Messages are correctly sorted by created_at (newest first)")
                            else:
                                self.log_test("Message Sorting", False, "Messages are not sorted correctly")
                    
                    return contacts
                else:
                    self.log_test("Retrieve Contact Messages", False, 
                                "Response is not a list", type(contacts))
            else:
                self.log_test("Retrieve Contact Messages", False, 
                            f"Unexpected status code: {response.status_code}", response.text)
                
        except requests.exceptions.RequestException as e:
            self.log_test("Retrieve Contact Messages", False, f"Request failed: {str(e)}")
        except Exception as e:
            self.log_test("Retrieve Contact Messages", False, f"Unexpected error: {str(e)}")
        
        return []
    
    def test_validation_errors(self):
        """Test Case 3: Validation Tests"""
        
        # Test missing required fields
        test_cases = [
            {"name": "Missing email", "data": {"name": "John Doe", "subject": "Test", "message": "Test message"}},
            {"name": "Missing name", "data": {"email": "john@example.com", "subject": "Test", "message": "Test message"}},
            {"name": "Missing subject", "data": {"name": "John Doe", "email": "john@example.com", "message": "Test message"}},
            {"name": "Missing message", "data": {"name": "John Doe", "email": "john@example.com", "subject": "Test"}},
            {"name": "Empty data", "data": {}},
            {"name": "Invalid email format", "data": {"name": "John Doe", "email": "invalid-email", "subject": "Test", "message": "Test message"}}
        ]
        
        for test_case in test_cases:
            try:
                response = requests.post(f"{self.base_url}/contact", json=test_case["data"], timeout=10)
                
                if response.status_code in [400, 422]:  # Expected validation error codes
                    self.log_test(f"Validation - {test_case['name']}", True, 
                                f"Correctly rejected with status {response.status_code}")
                elif response.status_code in [200, 201]:
                    self.log_test(f"Validation - {test_case['name']}", False, 
                                "Should have been rejected but was accepted", response.json())
                else:
                    self.log_test(f"Validation - {test_case['name']}", False, 
                                f"Unexpected status code: {response.status_code}", response.text)
                    
            except requests.exceptions.RequestException as e:
                self.log_test(f"Validation - {test_case['name']}", False, f"Request failed: {str(e)}")
            except Exception as e:
                self.log_test(f"Validation - {test_case['name']}", False, f"Unexpected error: {str(e)}")
    
    def test_multiple_submissions(self):
        """Test Case 4: Multiple Submissions"""
        test_contacts = [
            {
                "name": "Priya Sharma",
                "email": "priya.sharma@startup.in",
                "subject": "Collaboration Opportunity",
                "message": "Hello Abhishek, I represent a fintech startup and we're looking for a talented developer to join our team. Your portfolio shows exactly the kind of expertise we need."
            },
            {
                "name": "Michael Johnson",
                "email": "m.johnson@globaltech.com",
                "subject": "Freelance Project Inquiry",
                "message": "Hi there! We have an urgent React project that needs to be completed in 3 weeks. Based on your portfolio, you seem like the perfect fit. Are you available for freelance work?"
            },
            {
                "name": "Sarah Chen",
                "email": "sarah.chen@designstudio.co",
                "subject": "Portfolio Feedback",
                "message": "Your portfolio is absolutely stunning! The design and functionality are top-notch. I'm a fellow developer and would love to connect and perhaps collaborate on future projects."
            }
        ]
        
        created_ids = []
        
        for i, contact_data in enumerate(test_contacts, 1):
            try:
                response = requests.post(f"{self.base_url}/contact", json=contact_data, timeout=10)
                
                if response.status_code in [200, 201]:
                    response_data = response.json()
                    created_ids.append(response_data.get('id'))
                    self.log_test(f"Multiple Submission {i}", True, 
                                f"Contact {i} created successfully", f"ID: {response_data.get('id')}")
                else:
                    self.log_test(f"Multiple Submission {i}", False, 
                                f"Failed with status {response.status_code}", response.text)
                    
            except Exception as e:
                self.log_test(f"Multiple Submission {i}", False, f"Error: {str(e)}")
        
        # Verify all contacts are retrievable
        if created_ids:
            time.sleep(1)  # Brief pause to ensure data is persisted
            all_contacts = self.test_retrieve_contact_messages()
            
            # Check if our created contacts are in the retrieved list
            retrieved_ids = [contact.get('id') for contact in all_contacts if contact.get('id')]
            found_contacts = [cid for cid in created_ids if cid in retrieved_ids]
            
            if len(found_contacts) == len(created_ids):
                self.log_test("Multiple Submissions Verification", True, 
                            f"All {len(created_ids)} submitted contacts found in database")
            else:
                self.log_test("Multiple Submissions Verification", False, 
                            f"Only {len(found_contacts)}/{len(created_ids)} contacts found in database")
    
    def test_database_verification(self):
        """Test Case 5: Database Verification"""
        # Get all contacts and verify structure
        contacts = self.test_retrieve_contact_messages()
        
        if contacts:
            sample_contact = contacts[0]
            required_fields = ['id', 'name', 'email', 'subject', 'message', 'created_at', 'status']
            
            missing_fields = [field for field in required_fields if field not in sample_contact]
            
            if not missing_fields:
                self.log_test("Database Structure Verification", True, 
                            "All required fields present in database records")
                
                # Verify data types
                type_checks = []
                if isinstance(sample_contact.get('id'), str):
                    type_checks.append("ID is string")
                if isinstance(sample_contact.get('name'), str):
                    type_checks.append("Name is string")
                if isinstance(sample_contact.get('email'), str):
                    type_checks.append("Email is string")
                if isinstance(sample_contact.get('status'), str):
                    type_checks.append("Status is string")
                
                self.log_test("Database Data Types", True, 
                            f"Data types verified: {', '.join(type_checks)}")
            else:
                self.log_test("Database Structure Verification", False, 
                            f"Missing required fields: {missing_fields}")
        else:
            self.log_test("Database Structure Verification", False, 
                        "No contacts found to verify structure")
    
    def run_all_tests(self):
        """Run all test cases"""
        print("=" * 60)
        print("CONTACT FORM BACKEND API TESTING")
        print("=" * 60)
        
        # Test 1: Valid submission
        self.test_valid_contact_submission()
        
        # Test 2: Retrieve messages
        self.test_retrieve_contact_messages()
        
        # Test 3: Validation
        self.test_validation_errors()
        
        # Test 4: Multiple submissions
        self.test_multiple_submissions()
        
        # Test 5: Database verification
        self.test_database_verification()
        
        # Summary
        print("\n" + "=" * 60)
        print("TEST SUMMARY")
        print("=" * 60)
        
        total_tests = len(self.test_results)
        passed_tests = len([t for t in self.test_results if t['success']])
        failed_tests = total_tests - passed_tests
        
        print(f"Total Tests: {total_tests}")
        print(f"Passed: {passed_tests}")
        print(f"Failed: {failed_tests}")
        print(f"Success Rate: {(passed_tests/total_tests)*100:.1f}%")
        
        if failed_tests > 0:
            print("\nFAILED TESTS:")
            for test in self.test_results:
                if not test['success']:
                    print(f"  ❌ {test['test']}: {test['message']}")
        
        return self.test_results

if __name__ == "__main__":
    tester = ContactAPITester()
    results = tester.run_all_tests()