# Hackathon_1-Bustracker
This website is all about tracking a bus through its live location. Users can login and access the live loaction of the bus they wish to aboard.
Navigation:
The first page is for login/signup. (the login credentials set for now are email:eshita and password:eshita123)
The first page also has login for admin. (the login credentials set for now are username:admin and password:admin)
Here the interfaces get changed for admin and user. 
The display of live location tracking will be same for user interface and admin interface.
But the profile popup changes. User get to change their desired bus stop. Admin can inform the users about any delays/ updates in the form of notifications.



The concept behind the website is to - fetch the admin's (supposedly bus driver's) location
                                     - display the admin's location on both the admin as well as user interface
                                     - collect the bus stop preference of the user
                                     - pin the preferred bus stop unique to each user on the map
                                     - calculate and display the estimated time for the bus to reach the user's preferred stop
                                     - notify the users about the updates by the admin

                                  
Features of the current website are :

-Admin login- the bus driver is given the admin access with which he can give updates to the users in the form of notifications.

-User login- users can signup/ login to access the display of the bus's live location(static for now). The users have a profile popup where 
 they can change their desired bus stop.


Features under development are :
- live location mapping of the admin
- pining of the preferred bus stops which is unique to every user
- calculating and displaying the estimated time taken by the bus to reach the preferred bus stop
- notification is sent to the admin panel but sending it to the users interface is under development
- store the data of login, preferrred bus stops, etc in the local storage
