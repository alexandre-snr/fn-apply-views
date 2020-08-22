# fn-apply-views

This program fetches SQL migrations from an AWS S3 bucket and applies them in order.

Example filename: `13_my_table.sql`.

## Usage
You can run the script manually using a command:
```bash
DB_USER=user DB_PASSWORD=pwd DB_HOST=localhost DB_NAME=db AWS_REGION=us-west-2 AWS_BUCKET_NAME=migrations node .
```

You can run it in a docker container as well:
```bash
docker run -e DB_USER=user -e DB_PASSWORD=pwd -e DB_HOST=host -e DB_NAME=db -e AWS_REGION=us-west-2 -e AWS_BUCKET_NAME=buck -e AWS_ACCESS_KEY_ID=keyid -e AWS_SECRECT_ACCESS_KEY -e AWS_SESSION_TOKEN=tok alexandresnr/fn-apply-views:v1
```

Available environment variables are:
- `DB_USER`: username for the Postgres DB
- `DB_PASSWORD`: password for the Postgres DB
- `DB_HOST`: host for the Postgres DB
- `DB_NAME`: database name for the Postgres DB
- `AWS_REGION`: region for the S3 bucket
- `AWS_BUCKET_NAME`: name for the S3 bucket

Additionnal environment variables must be set for the AWS credentials. (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_SESSION_TOKEN`)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)