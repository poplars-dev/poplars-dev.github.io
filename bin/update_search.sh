#!/usr/bin/env bash

DATA="_site/search-data.json"
INDEXER="bin/build-index.js"
INDEX="search-index.json"

cat $DATA | node $INDEXER > $INDEX
gzip -9 -kf $INDEX
