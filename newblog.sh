#!/usr/bin/env bash
blogPath=./src/pages/blog/

read -erp "Enter blog date [YYYY-MM-DD]: " date
read -erp "Enter blog title: " title
read -erp "Enter blog description: " description

function slug() {
    echo "$1" | sed -e 's/[^[:alnum:]]/-/g' | tr -s '-' | tr '[:upper:]' '[:lower:]'
}

cat << EOF > "$blogPath$(slug "$title").md"
---
date: '$date'
title: $title
templateKey: blog
description: |
    $description
---
Markdown and/or HTML content goes here.
EOF

printf "\n"
echo "Blog markdown created: " "$blogPath$(slug "$title").md"
cat "$blogPath$(slug "$title").md"
