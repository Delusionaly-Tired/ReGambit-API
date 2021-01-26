#!/bin/sh

API="https://aqueous-shelf-72255.herokuapp.com"
URL_PATH="/openings"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
