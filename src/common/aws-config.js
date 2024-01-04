/* eslint-disable */
const awsmobile = {
    "aws_project_region": "aws_application_region",
    "aws_cognito_region": "aws_application_region",
    "aws_cognito_identity_pool_id": "aws_cognito_identity_poolid",
    "aws_user_pools_id": "aws_cognito_user_poolid",
    "aws_user_pools_web_client_id": "aws_cognito_user_pool_webclientid",
    "oauth": {},
    "aws_cognito_username_attributes": [
        "EMAIL"
    ],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": [],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": [
            "REQUIRES_LOWERCASE",
            "REQUIRES_UPPERCASE",
            "REQUIRES_NUMBERS",
            "REQUIRES_SYMBOLS"
        ]
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ]
};

export default awsmobile;