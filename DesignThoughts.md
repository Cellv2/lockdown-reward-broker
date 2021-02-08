# Initial Design Thoughts

## Pages

#### Home Page

- Has an overview of each child's current funds
- Has a 'Redeem Reward' button for each child, taking them to the list of rewards they can redeem
- Has a 'View Log' button for each child, bringing up a modal which shows past events for the child
- Has an 'Add Funds' button to allow the admin to access the AddFunds page
- Has an 'Admin Page' button to access the admin page (this is password protected)

#### AddFunds Page

- Allows the admin to select a child, manually enter an amount of funds to add, then confirm the addition of funds
  - The addition of funds is protected by a password to prevent mischief
- A log is written with the attempt, regardless of whether the password is correct. The log entry contains the:
  - Time, child, funds before, successful/unsuccessful attempt, funds after

#### Rewards Page

- Allows the child which was selected from the home page to redeem rewards, which will in turn remove funds from their total
- A log is written when a reward is successfully redeemed. This log entry contains the:
  - Time, child, funds before, redeemed reward, reward cost, funds after

#### Admin Page

- Allows the admin to:
  - View the current list of children
  - View the current list of rewards
  - Add additional rewards
  - Update current rewards (e.g. update cost of rewards, (re)assigning rewards to children)
  - View the admin log (all admin page accesses)
  - View a global log (all log events system wide)
- A log is written when an individual attempts to access the page, regardless of whether the password is incorrect or not. This log contains the:
  - Time, successful/unsuccessful attempt

## UX Flow

#### Check Funds

- Open app
- On the home page, a list of current funds per child will be visible

#### Spend Funds

- Open app
- On home page, click on 'Redeem Reward' button next to child
- On reward page, click on reward
- Click on confirmation prompt to make sure that you are redeeming the reward you wanted to
- Automatically returned to home page with updated funds now displayed

#### View Child Reward/Funds Log

- Open app
- On home page, click the 'View Log' button next to child
- This will bring up a modal with a list of log events

#### Add Funds

- Open app
- On home page, click on 'Add Funds' button
- On add funds page, select child to add reward to from a dropdown list
- The current funds for the child will display, as well as an input box
- In an input box, type a number of funds to add to the child
- Click an 'Add Funds' button
- Enter password to complete the addition of funds

#### Add Children

- Open app
- On home page, click the 'Admin Area' button
- Sign in using the admin password
- Click on the 'Add Child' button
- In the prompt, enter the name of the child to add, then click OK

#### Add Additional Rewards

- Open app
- On home page, click the 'Admin Area' button
- Sign in using the admin password
- Click on the 'Add Reward' button
- A form will appear containing the following information:
  - Reward name, reward cost, a list of checkboxes for each child which, if checked, will assign the reward to that child upon creation
- Once the form is complete, click 'Save' to add the reward

#### Update Reward

- Open app
- On home page, click the 'Admin Area' button
- Sign in using the admin password
- Under the list of rewards, click on the reward you wish to edit
- A form with the current reward information will appear - update the reward information
- Once the form is complete, click 'Save' to update the reward


#### Update Rewards Assigned Child

- There are two ways to do this:
  1) Update it on a reward by reward basis. This is done in the same way as the 'UPDATE REWARD' flow, by going into an individual record and updating the assigned child(ren)
  2) A 'Bulk Update Child Rewards' button, which saves the admin from needing to go through each reward one by one to add/remove a child. For this option, the flow is the following:
- Open app
- On home page, click the 'Admin Area' button
- Sign in using the admin password
- This will bring up a form with a row for each reward, and a column for each child
- Each table cell will have a checkbox, designating whether that child should have access to that reward. Uncheck/check as appropriate
- Once the form is complete, click 'Save' to update the reward

#### View Admin Log

- Open app
- On home page, click the 'Admin Area' button
- Sign in using the admin password
- On the admin page, click the 'View Admin Log' button
- This will bring up a modal with a list of log events

#### View Global Log

- Open app
- On home page, click the 'Admin Area' button
- Sign in using the admin password
- On the admin page, click the 'View Global Log' button
- This will bring up a modal with a list of log events

### Additional Thoughts/Considerations

- Take a backup of the current state/database on app startup, just in case anything goes wrong?
