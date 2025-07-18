export const userStoriesData =[

        {
            "test_id": "TC-REQ-001-1",
            "title": "Register with valid email and phone number",
            "precondition": "User is on the registration page",
            "steps": [
                "Enter a valid email address",
                "Enter a valid phone number",
                "Click Register"
            ],
            "expected_result": "User is registered successfully, and a confirmation message is displayed",
            "priority": "High",
            "tags": [
                "registration",
                "email",
                "phone",
                "regression"
            ]
        },
        {
            "test_id": "TC-REQ-001-2",
            "title": "Register with invalid email address",
            "precondition": "User is on the registration page",
            "steps": [
                "Enter an invalid email address",
                "Enter a valid phone number",
                "Click Register"
            ],
            "expected_result": "An error message is displayed indicating an invalid email address",
            "priority": "Medium",
            "tags": [
                "registration",
                "email",
                "negative",
                "regression"
            ]
        },
        {
            "test_id": "TC-REQ-001-3",
            "title": "Register with invalid phone number",
            "precondition": "User is on the registration page",
            "steps": [
                "Enter a valid email address",
                "Enter an invalid phone number",
                "Click Register"
            ],
            "expected_result": "An error message is displayed indicating an invalid phone number",
            "priority": "Medium",
            "tags": [
                "registration",
                "phone",
                "negative",
                "regression"
            ]
        },
        {
            "test_id": "TC-REQ-001-4",
            "title": "Attempt duplicate registration with existing email",
            "precondition": "User is on the registration page, and an account with the email already exists",
            "steps": [
                "Enter an existing email address",
                "Enter a valid phone number",
                "Click Register"
            ],
            "expected_result": "An error message is displayed indicating that the email is already registered",
            "priority": "Medium",
            "tags": [
                "registration",
                "email",
                "duplicate",
                "negative",
                "regression"
            ]
        },
        {
            "test_id": "TC-REQ-001-5",
            "title": "Attempt duplicate registration with existing phone number",
            "precondition": "User is on the registration page, and an account with the phone number already exists",
            "steps": [
                "Enter a valid email address",
                "Enter an existing phone number",
                "Click Register"
            ],
            "expected_result": "An error message is displayed indicating that the phone number is already registered",
            "priority": "Medium",
            "tags": [
                "registration",
                "phone",
                "duplicate",
                "negative",
                "regression"
            ]
        },
        {
            "test_id": "TC-REQ-002-1",
            "title": "Upload valid PDF document",
            "precondition": "User is on the KYC document upload page",
            "steps": [
                "Select a PDF file",
                "Click Upload"
            ],
            "expected_result": "The file is uploaded successfully, and a progress indicator is displayed",
            "priority": "High",
            "tags": [
                "KYC",
                "upload",
                "PDF",
                "regression"
            ]
        },
        {
            "test_id": "TC-REQ-002-2",
            "title": "Upload valid JPG document",
            "precondition": "User is on the KYC document upload page",
            "steps": [
                "Select a JPG file",
                "Click Upload"
            ],
            "expected_result": "The file is uploaded successfully, and a progress indicator is displayed",
            "priority": "High",
            "tags": [
                "KYC",
                "upload",
                "JPG",
                "regression"
            ]
        },
        {
            "test_id": "TC-REQ-002-3",
            "title": "Upload invalid file format",
            "precondition": "User is on the KYC document upload page",
            "steps": [
                "Select a file with an invalid format (e.g., DOC)",
                "Click Upload"
            ],
            "expected_result": "An error message is displayed indicating an invalid file format",
            "priority": "Medium",
            "tags": [
                "KYC",
                "upload",
                "negative",
                "regression"
            ]
        },
        {
            "test_id": "TC-REQ-003-1",
            "title": "Verify email sent after registration",
            "precondition": "User has successfully registered",
            "steps": [
                "Check the user's inbox for a verification email"
            ],
            "expected_result": "A verification email containing a unique activation link is received",
            "priority": "High",
            "tags": [
                "registration",
                "email",
                "verification",
                "regression"
            ]
        },
        {
            "test_id": "TC-REQ-003-2",
            "title": "Verify link expiration",
            "precondition": "User has received a verification email",
            "steps": [
                "Wait more than 24 hours",
                "Click the activation link"
            ],
            "expected_result": "The link is expired, and an appropriate message is displayed",
            "priority": "Medium",
            "tags": [
                "registration",
                "email",
                "verification",
                "regression"
            ]
        },
        {
            "test_id": "TC-REQ-003-3",
            "title": "Test resend verification email",
            "precondition": "User has not received the verification email",
            "steps": [
                "Request to resend the verification email"
            ],
            "expected_result": "A new verification email is sent to the user",
            "priority": "Medium",
            "tags": [
                "registration",
                "email",
                "verification",
                "regression"
            ]
        },
        {
            "test_id": "TC-REQ-004-1",
            "title": "Password recovery using registered email",
            "precondition": "User is on the password recovery page",
            "steps": [
                "Enter registered email address",
                "Request OTP",
                "Enter received OTP",
                "Set new password"
            ],
            "expected_result": "Password is successfully reset",
            "priority": "High",
            "tags": [
                "password",
                "recovery",
                "OTP",
                "email",
                "regression"
            ]
        },
        {
            "test_id": "TC-REQ-004-2",
            "title": "Password recovery using registered phone number",
            "precondition": "User is on the password recovery page",
            "steps": [
                "Enter registered phone number",
                "Request OTP",
                "Enter received OTP",
                "Set new password"
            ],
            "expected_result": "Password is successfully reset",
            "priority": "High",
            "tags": [
                "password",
                "recovery",
                "OTP",
                "phone",
                "regression"
            ]
        },
        {
            "test_id": "TC-REQ-004-3",
            "title": "Attempt password recovery with incorrect OTP",
            "precondition": "User has initiated password recovery",
            "steps": [
                "Enter incorrect OTP"
            ],
            "expected_result": "An error message is displayed",
            "priority": "Medium",
            "tags": [
                "password",
                "recovery",
                "OTP",
                "negative",
                "regression"
            ]
        }
    
]
