const express = require('express');
const axios = require('axios');
const router = express.Router();
const logger = require('../utils/logger');

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

function validatePostData(data) {
    return data && typeof data.title === 'string' && typeof data.body === 'string';
}

// GET all posts
router.get('/', async (req, res, next) => {
    try {
        const response = await axios.get(BASE_URL);
        res.json(response.data);
    } catch (err) {
        logger.error('Network error while fetching posts', err);
        next(new Error('Failed to fetch posts'));
    }
});

// GET single post
router.get('/:id', async (req, res, next) => {
    try {
        const response = await axios.get(`${BASE_URL}/${req.params.id}`);
        if (!response.data || Object.keys(response.data).length === 0) {
            throw new Error('Post not found');
        }
        res.json(response.data);
    } catch (err) {
        logger.error(`Error fetching post ${req.params.id}`, err);
        next(new Error('Failed to fetch post'));
    }
});

// CREATE post
router.post('/', async (req, res, next) => {
    try {
        if (!validatePostData(req.body)) {
            throw new Error('Invalid data format');
        }

        const response = await axios.post(BASE_URL, req.body);
        res.status(201).json({message: 'success', data:response.data});
    } catch (err) {
        logger.error('Error creating post', err);
        next(new Error('Failed to create post'));
    }
});

// UPDATE post
router.put('/:id', async (req, res, next) => {
    try {
        if (!validatePostData(req.body)) {
            throw new Error('Invalid data format');
        }

        const response = await axios.put(`${BASE_URL}/${req.params.id}`, req.body);
        res.json(response.data);
    } catch (err) {
        logger.error(`Error updating post ${req.params.id}`, err);
        next(new Error('Failed to update post'));
    }
});

// DELETE post
router.delete('/:id', async (req, res, next) => {
    try {
        await axios.delete(`${BASE_URL}/${req.params.id}`);
        res.json({ message: 'Post deleted' });
    } catch (err) {
        logger.error(`Error deleting post ${req.params.id}`, err);
        next(new Error('Failed to delete post'));
    }
});

module.exports = router;