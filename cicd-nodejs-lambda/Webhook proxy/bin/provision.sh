#!/bin/bash
aws cloudformation deploy \
  --template-file cloudformation/lambda-s3.yaml \
  --stack-name "test-cicd-webhook-proxy-provision-js"  \
  --capabilities CAPABILITY_NAMED_IAM \
  --no-fail-on-empty-changeset \
