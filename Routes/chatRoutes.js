const express = require('express');
const { getChat, indChat, uploadImage } = require('../controllers/chatController');
const upload = require('../middlewares/multer');
const router = express.Router();


router.get('/getChats', getChat);
router.post('/ind-chat', indChat);
router.post('/upload-image', upload.single('file'), uploadImage); 

module.exports = router;  