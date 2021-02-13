#!/bin/bash

API="http://localhost:4741"
#API="https://aqueous-shelf-72255.herokuapp.com"
URL_PATH="/openings"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
