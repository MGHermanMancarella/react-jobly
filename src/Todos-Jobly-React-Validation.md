React-Jobly Authorization, Tokens, and Things Elie Warned us About...
<!-- 
1. Login / Signup (forms)
   - Get Token (api response)
2. setToken (state)
   - Changing token state triggers our useEffect
     - useEffect: 
       - Decode the token, pull out the UserName
       - Send an Ajax request to users/:username
         - Receive userData 
       - useContext to set currUser from response
3. Token will stay in the State, but not get passed around.     
    - CurrUser will be our logic for "logged in?" 


**Step Two: Update Your Routes File**
Write them forms, baby
- [ ] login form
  - [x] Props: login Fn
  - [x] Fields:
    - [x] Username
    - [x] Password
  - [ ] FlashMessage
    - [ ] alert alert-danger 
      - Insomnia returns {error:{message:"invalid username/password", Status:401}}

- [ ] Signup / edit form
  -[x] Props: 
    -[x] function (either Signup or patch)
    -[x] currUser = null
  -[x] Fields:
    -[x] Username
      -[x] Add Logic: loggedIn ? disable input : enable/blank
    -[x] Password
    -[x] First Name
    -[x] Last Name
    -[x] Email
  - [ ] FlashMessage:
    - [ ] Array of error messages
 


**Routs**
- [x] Signup
- [x] login
- [x] profile

**Homepage**
- [x] Signup button
- [x] login button
- [x] Logic: If currUser not present, load buttons, else load:
        "Jobly
        All the jobs in one, convenient place.

        Welcome Back, test!"

- [x] Logic to check for useContext:
  currUser 
  ? 
  display not-logged-in JSX
  : 
  display logged in JSX

**NavBar**
- [x] Logic: If currUser not present, load buttons, else load: 
  - [x] Jobly, CompanyList, JobList, Profile, Log Out
- [x] Logic to check for useContext:
  currUser 
  ? 
  display not-logged-in JSX
  : 
  display logged in JSX


**Functions**

**App.js:**
Token State
CurrUser State

-Signup
  - accepts: formData
    - Make the axios post req.
      - setToken to response

-login
  - accepts: formData
    - Make the axios post req.
      - setToken to response

UseEffect [token]
- json-decode(token) => username
    - send GET w/username
      - setCurrUser with response


**ADD THIS TO MOST THINGS**
-  Logic to check for useContext:
  currUser 
  ? 
  display not-logged-in JSX
  : 
  display logged in JSX
 -->

For fun stuff:

1. fix forms
   - alignment
   - spacing
   - etc

2. homepage 
   - fix alignment of welcome
   - edit hero tag to something like "take your job search into the 21st century"
   - Change background on login

3. Re-deploy
Write them forms, baby
- [ ] login form
  - [x] Props: login Fn
  - [x] Fields:
    - [x] Username
    - [x] Password
  - [ ] FlashMessage
    - [ ] alert alert-danger 
      - Insomnia returns {error:{message:"invalid username/password", Status:401}}