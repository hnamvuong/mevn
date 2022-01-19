import axios from 'axios';
const url = '/api/post';

export default class API {
    //get all post from server
    static async getAllPost() {
        const res = await axios.get(url);
        return res.data;
    }
    //get single post by id
    static async getPostById(id) {
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }
    //create new post
    static async addPost(post) {
        const res = await axios.post(url, post);
        return res.data;
    }
    //update post
    static async updatePost(id, post) {
        const res = await axios.patch(`${url}/${id}`, post);
        return res.data;
    }
    //delete a post
    static async deletePost(id) {
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
}