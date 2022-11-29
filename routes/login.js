let express = require('express');
router = express.Router();
const { createHash } = require('crypto');

let pool = require('../resources');

router.post('/', (req, res) => {
    const loginDetails = req.headers;
    console.log(loginDetails);
    let details = {}
    if(loginDetails.login_type == 'user'){
        pool.query(`select * from ${loginDetails.user_type} where uname = ?`, [loginDetails.uname], function(err, rows, fields){
            if(err){
                console.log(err);
                details.status = 'failed'
                res.status(404).json(details);
            }
            if(rows.length == 0){
                details.status = 'failed';
                res.status(401).json(details);
            }
            else{
                if(rows[0].pwd == loginDetails.pwd){
                    console.log("login successful");
                    details.status = 'successful'
                    res.status(201).json(details);
                }
                else{
                    details.status = 'failed';
                    res.status(401).json(details);
                }
            }
        })
    }
    else{
        pool.query(`select * from ${loginDetails.user_type} where uname = ?`,[loginDetails.uname], function(err, rows, fields){
            if(err){
                console.log(err);
                details.status = 'failed';
                res.status(404).json(details);
            }
            if(rows.length == 0){
                details.status = 'failed';
                res.status(401).json(details);
            }
            else{
                const currentYear = String(new Date().getFullYear);
                const currentMonth = String(new Date().getMonth);
                const key = rows[0].pwd + currentMonth + currentYear;
                const hash = createHash('sha256').update(key).digest('hex');
                if(hash == req.body.hash){
                    details.hash = hash;
                    details.status = 'successful';
                    res.status(200).json(details);
                }
                else{
                    details.status = 'failed';
                    res.status(401).json(details);
                }
            }
        })
    }
})

module.exports = router;