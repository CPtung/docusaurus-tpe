#!/bin/bash
set -ue
TARGET_FILE=$1

## COPY TARGET_FILE
TOC_FILE=toc.md
cp ${TARGET_FILE} ${TOC_FILE}

## Generate TOC
doctoc ${TOC_FILE} &>/dev/null

## To insert toc into TARGET_FILE on stdout
start=$(expr $(grep -n '<!-- START' ${TOC_FILE} | awk -F: '{print $1}') + 4)
end=$(expr $(grep -n '<!-- END' ${TOC_FILE}| awk -F: '{print $1}') - 2)
toc=$(sed -n -e "${start},${end}p" ${TOC_FILE})

while IFS= read -r line; do
    if [ x"${line}" == x"[TOC]" ]; then
        echo "${toc}"
    else
        echo "${line}"
    fi
done < ${TARGET_FILE}

# clean
rm ${TOC_FILE}
