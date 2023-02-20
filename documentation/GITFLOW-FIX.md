## RULES TO OBEY TO FIX BUG

# ON STAGING ENVIRONMENT

- new branch from "dev"
- name : bugfix
- tests & CI
- if passed, merge to "dev"
  (if not ... well, you know !)

# ON PROD ENVIRONMENT

- new branch from "main"
- name : hotfix
- tests & CI
- if passed, merge to "main" & apply modif on "dev"
  (if not ... you know as well, and good luck !!)
