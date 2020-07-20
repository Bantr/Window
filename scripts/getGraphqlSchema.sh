#!/bin/bash

source .env
gq https://graphql.bantr.app -H "bantr-graphql: $HASURA_GRAPHQL_USER_SECRET"  --introspect > ./cypress/schema.graphql
