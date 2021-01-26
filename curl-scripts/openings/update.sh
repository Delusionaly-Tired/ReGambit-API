#!/bin/bash

API="https://aqueous-shelf-72255.herokuapp.com"
URL_PATH="/openings"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
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
