#!/bin/bash

API="https://aqueous-shelf-72255.herokuapp.com"
URL_PATH="/posts"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "post": {
      "title": "'"${title}"'",
      "content": "'"${content}"'"
    }
  }'

echo
