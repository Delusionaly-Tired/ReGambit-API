#!/bin/bash

API="http://localhost:4741"
URL_PATH="/examples"

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
    }'

echo
