So_Node_TEST

Q. When is it a good idea to not use NodeJs? Why? 

Ans. Node.js is not good for CPU intensive application due to its single threaded model. So If an application have large calculation and intensive CPU utilization like high graphics gaming applications etc in these cases it is not ideal to use Node.js.

-- open command promt:-
-- go to project folder and run npm i
-- to run http server go to project folder and type npm start or node app.js 

api details - 
1.  play_marco_polo_game   - return the series of numbers. Url:- localhost:3000/play_marco_polo_game 
2. convert_invoice_numbers - read the invoices from file and write the result in file - output_user_story_1.txt. in Routes folder url:- localhost:3000/convert_invoice_numbers
 