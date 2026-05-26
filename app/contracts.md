# API Contracts & Integration Plan

## Overview
This document outlines the backend implementation needed to replace mock functionality with real database operations.

## Mocked Data Analysis

### Static Data (No Backend Needed)
- `personalInfo` - Contact information and bio
- `services` - Service offerings list
- `projects` - Portfolio projects showcase
- `stats` - Statistics display

### Dynamic Data (Requires Backend)
- `submitContactForm()` - Contact form submission **[NEEDS BACKEND]**

---

## Backend Implementation Required

### 1. Contact Form API

**Endpoint**: `POST /api/contact`

**Request Body**:
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "subject": "string (required)",
  "message": "string (required)"
}
```

**Response (Success - 201)**:
```json
{
  "success": true,
  "message": "Thank you! I'll get back to you soon.",
  "id": "contact_id"
}
```

**Response (Error - 400/500)**:
```json
{
  "success": false,
  "message": "Error message"
}
```

### 2. MongoDB Model

**Collection**: `contacts`

**Schema**:
```python
{
  "id": str (uuid),
  "name": str,
  "email": str,
  "subject": str,
  "message": str,
  "created_at": datetime,
  "status": str (default: "new")
}
```

---

## Frontend Integration Changes

### File: `/app/frontend/src/components/Contact.jsx`

**Change Required**:
Replace mock function call with actual API call:

```javascript
// BEFORE (Mock):
import { submitContactForm } from '../mock';
const response = await submitContactForm(formData);

// AFTER (Real API):
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const response = await axios.post(`${BACKEND_URL}/api/contact`, formData);
```

**Integration Steps**:
1. Import axios in Contact.jsx
2. Replace submitContactForm import with API call
3. Handle API response and errors appropriately
4. Keep existing toast notifications

---

## Implementation Checklist

- [ ] Create Contact model in backend
- [ ] Create POST /api/contact endpoint
- [ ] Add validation for required fields
- [ ] Add error handling
- [ ] Update Contact.jsx to use backend API
- [ ] Remove mock submitContactForm import
- [ ] Test contact form submission
- [ ] Verify data stored in MongoDB

---

## Backend File Structure

```
/app/backend/
├── server.py (update with contact endpoint)
└── (models defined inline or separate if needed)
```
