import express from 'express'

const router = express.Router();

router.get('/media', (req, res) => {
    res.json([]);
});

export default router;