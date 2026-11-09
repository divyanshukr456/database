const express =require('express');
const app =express();
const usermodel = require('./usermodel');


app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/create', async (req, res) => {
    try {
        let createduser = await usermodel.create({
            name: 'harsh',
            email: 'harsh@example.com',
            username: 'harsh123'
        });

        res.send(createduser);
    } catch (error) {
        res.status(500).send(error);
    
    }

});

app.get('/update', async (req, res) => {
    try {
        let updateduser = await usermodel.findOneAndUpdate(
            { username: 'harsh123' },  // Find user
            { name: 'Harsh opp' },   // Update data
            { new: true }              // Return updated document
        );

        if (!updateduser) {
            return res.status(404).send('User not found');
        }

        res.send(updateduser);

    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/read', async (req, res) => {
    try {
        let users = await usermodel.find();

        res.send(users);

    } catch (error) {
        res.status(500).send(error.message);
    }
});
app.get('/delete', async (req, res) => {
    try {
        let deleteduser = await usermodel.findOneAndDelete({
            username: 'harsh123'
        });

        if (!deleteduser) {
            return res.status(404).send('User not found');
        }

        res.send({
            message: 'User deleted successfully',
            deleteduser: deleteduser
        });

    } catch (error) {
        res.status(500).send(error.message);
    }
});
  
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});

