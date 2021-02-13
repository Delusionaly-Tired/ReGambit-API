#!/bin/sh

API="http://localhost:4741"
#API="https://aqueous-shelf-72255.herokuapp.com"
URL_PATH="/posts"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
