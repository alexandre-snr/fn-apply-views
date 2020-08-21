# fn-apply-views

This program fetches SQL requests from an AWS S3 bucket and applies them in order.

Example filename: `13_my_request.sql`.

Available environment variables are:
- DB_USER: username for the Postgres DB
- DB_PASSWORD: password for the Postgres DB
- DB_HOST: host for the Postgres DB
- DB_NAME: database name for the Postgres DB
- AWS_REGION: region for the S3 bucket
- AWS_BUCKET_NAME: name for the S3 bucket

Additionnal environment variables must be set for the AWS credentials. (AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_SESSION_TOKEN)