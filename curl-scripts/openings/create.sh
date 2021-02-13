#!/bin/bash

API="http://localhost:4741"
#API="https://aqueous-shelf-72255.herokuapp.com"
URL_PATH="/openings"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "opening": {
      "name": "'"${NAME}"'",
      "type": "'"${TYPE}"'",
      "skill": "'"${SKILL}"'",
    }
  }'

echo
