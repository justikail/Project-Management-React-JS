# Project Management

Let's manage your project with web based project management.
Customize the UI appearance to your taste. Adjust the url, page to your taste.

# Installation & Setup

- Run this command :
  ```
  git clone https://github.com/justikail/Project-Management-ReactJS
  cd Project-Management-ReactJS
  npm i
  code .
  ```
- [Login / Register Supabase Account.](https://supabase.com/)
- Create a new project with any name & any password.
- Go to Table Editor & click Create a new table with table name "user" & unchecklist RLS.
- Add or edit column with this detail:
  ```
   _______________________
  | column    | typewidth |
  -------------------------
  | username  | text      |
  | password  | text      |
  -------------------------
  ```
- Click insert & click insert row.
- Ignore the id and created_at parts, then fill in the username with your username, then fill in the password with your password which has been encryption to md5.
- Click new table and give the name "portfolio" & unchecklist RLS.
- Add or edit column with this detail:
  ```
   _______________________________________
  | column      | typewidth | setting     |
  -----------------------------------------
  | title       | varchar   | notnullable |
  | description | varchar   | notnullable |
  | tech        | varchar   | notnullable |
  | image       | varchar   | notnullable |
  | status      | bool      | notnullable |
  | repo        | text      | notnullable |
  -----------------------------------------
  ```
- Go to Project Settings -> API.
- Copy URL on Project URL field, Paste on .env -> "VITE_API_URL"
- Copy Api Key on Project API Keys, Paste on .env -> "VITE_API_KEY"
