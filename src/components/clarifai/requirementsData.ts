 export const requirementsData =[

        {
            "requirement_id": "REQ-001",
            "requirement_text": "The system shall allow user registration using email address and phone number.",
            "original_text": "The system must allow users to register using their email address and phone number.",
            "page_number": null,
            "line_number": null,
            "source_section": "2. Functional Requirements",
            "requirement_type": "Functional",
            "confidence_score": 0.95,
            "stakeholders": [
                "End-user",
                "Admin"
            ],
            "validation": {
                "llm_check_passed": true,
                "issues": [],
                "justification": "The requirement is clearly defined and testable."
            }
        },
        {
            "requirement_id": "REQ-002",
            "requirement_text": "The system shall allow users to upload KYC documents in PDF or JPG format.",
            "original_text": "Users shall be able to upload KYC documents in PDF or JPG format.",
            "page_number": null,
            "line_number": null,
            "source_section": "2. Functional Requirements",
            "requirement_type": "Functional",
            "confidence_score": 0.95,
            "stakeholders": [
                "End-user",
                "Admin"
            ],
            "validation": {
                "llm_check_passed": true,
                "issues": [],
                "justification": "The requirement is clearly defined and testable."
            }
        },
        {
            "requirement_id": "REQ-003",
            "requirement_text": "The portal shall send verification emails after registration.",
            "original_text": "The portal should send verification emails after registration.",
            "page_number": null,
            "line_number": null,
            "source_section": "2. Functional Requirements",
            "requirement_type": "Functional",
            "confidence_score": 0.95,
            "stakeholders": [
                "End-user",
                "Admin"
            ],
            "validation": {
                "llm_check_passed": true,
                "issues": [],
                "justification": "The requirement is clearly defined and testable."
            }
        },
        {
            "requirement_id": "REQ-004",
            "requirement_text": "The system shall support password recovery via OTP.",
            "original_text": "The system must support password recovery via OTP.",
            "page_number": null,
            "line_number": null,
            "source_section": "2. Functional Requirements",
            "requirement_type": "Functional",
            "confidence_score": 0.95,
            "stakeholders": [
                "End-user",
                "Admin"
            ],
            "validation": {
                "llm_check_passed": true,
                "issues": [],
                "justification": "The requirement is clearly defined and testable."
            }
        },
        {
            "requirement_id": "REQ-005",
            "requirement_text": "The application shall support 99.9% availability.",
            "original_text": "The application shall support 99.9% availability.",
            "page_number": null,
            "line_number": null,
            "source_section": "3. Non-Functional Requirements",
            "requirement_type": "Non-Functional",
            "confidence_score": 0.98,
            "stakeholders": [
                "DevOps",
                "Customer"
            ],
            "validation": {
                "llm_check_passed": true,
                "issues": [],
                "justification": "The requirement is measurable and testable."
            }
        },
        {
            "requirement_id": "REQ-006",
            "requirement_text": "The system shall encrypt all personal data at rest and in transit.",
            "original_text": "The system must encrypt all personal data at rest and in transit.",
            "page_number": null,
            "line_number": null,
            "source_section": "3. Non-Functional Requirements",
            "requirement_type": "Non-Functional",
            "confidence_score": 0.9,
            "stakeholders": [
                "Compliance Officer",
                "DevOps"
            ],
            "validation": {
                "llm_check_passed": true,
                "issues": [],
                "justification": "The requirement is clearly defined, though testing might require specific security audits."
            }
        },
        {
            "requirement_id": "REQ-007",
            "requirement_text": "The system shall allow 500 concurrent user sessions.",
            "original_text": "Performance should allow 500 concurrent user sessions.",
            "page_number": null,
            "line_number": null,
            "source_section": "3. Non-Functional Requirements",
            "requirement_type": "Non-Functional",
            "confidence_score": 0.98,
            "stakeholders": [
                "DevOps",
                "Admin"
            ],
            "validation": {
                "llm_check_passed": true,
                "issues": [],
                "justification": "The requirement is measurable and testable."
            }
        },
        {
            "requirement_id": "REQ-008",
            "requirement_text": "The system shall integrate with Aadhaar for identity verification.",
            "original_text": "The system must integrate with Aadhaar for identity verification.",
            "page_number": null,
            "line_number": null,
            "source_section": "4. External Integrations",
            "requirement_type": "External Integration",
            "confidence_score": 0.9,
            "stakeholders": [
                "API Partner",
                "Admin"
            ],
            "validation": {
                "llm_check_passed": true,
                "issues": [],
                "justification": "The requirement is clearly defined, though implementation details might need further clarification."
            }
        },
        {
            "requirement_id": "REQ-009",
            "requirement_text": "The system shall support PAN card validation via external API.",
            "original_text": "It shall also support PAN card validation via external API.",
            "page_number": null,
            "line_number": null,
            "source_section": "4. External Integrations",
            "requirement_type": "External Integration",
            "confidence_score": 0.9,
            "stakeholders": [
                "API Partner",
                "Admin"
            ],
            "validation": {
                "llm_check_passed": true,
                "issues": [],
                "justification": "The requirement is clearly defined and testable."
            }
        },
        {
            "requirement_id": "REQ-010",
            "requirement_text": "The application shall log all user login attempts for a period of 1 year.",
            "original_text": "The application must log all user login attempts for a period of 1 year.",
            "page_number": null,
            "line_number": null,
            "source_section": "5. Audit and Compliance",
            "requirement_type": "System",
            "confidence_score": 0.92,
            "stakeholders": [
                "Admin",
                "Compliance Officer"
            ],
            "validation": {
                "llm_check_passed": true,
                "issues": [],
                "justification": "The requirement is clearly defined and testable."
            }
        },
        {
            "requirement_id": "REQ-011",
            "requirement_text": "All changes to user information shall be version-controlled.",
            "original_text": "All changes to user information shall be version-controlled.",
            "page_number": null,
            "line_number": null,
            "source_section": "5. Audit and Compliance",
            "requirement_type": "System",
            "confidence_score": 0.85,
            "stakeholders": [
                "DevOps",
                "Admin"
            ],
            "validation": {
                "llm_check_passed": false,
                "issues": [
                    "Not measurable",
                    "Vague"
                ],
                "justification": ""
            }
        }
    
]