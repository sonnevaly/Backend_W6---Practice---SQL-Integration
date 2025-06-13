//
//  This repository shall:
//  - Connect to the database (using the pool provided by the database.js)
// -  Perfrom the SQL querries to implement the bellow API
//
import { pool } from "../utils/database.js";
// Get all articles
export async function getAllArticles() {
    // TODO
    const query = "SELECT * FROM articles";
    const [rows] = await pool.query(query);
    return rows;
}

// Get one article by ID
export async function getArticleById(id) {
    // TODO
    const query = "SELECT * FROM articles WHERE id = ?"; 
    const [rows] = await pool.query(query, [id]);
    return rows[0];
}

// Create a new article
export async function createArticle(article) {
    // TODO
    const query = "INSERT INTO articles (title, content, journalist ) VALUES (?, ?, ?)";
    const { title, content, journalist } = article;
    const [result] = await pool.query(query, [title, content, journalist]);
    return { id: result.insertId, ...article };
}

// Update an article by ID
export async function updateArticle(id, updatedData) {
    // TODO
    const query = "UPDATE articles SET title = ?, content = ?, journalist = ? WHERE id = ?";
    const { title, content, journalist } = updatedData;
    await pool.query(query, [title, content, journalist, id]);
    return { id, ...updatedData };
}

// Delete an article by ID
export async function deleteArticle(id) {
    // TODO
    const query = "DELETE FROM articles WHERE id = ?";
    await pool.query(query, [id]); 
    return { id };
}
