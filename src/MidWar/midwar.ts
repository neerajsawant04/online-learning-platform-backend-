import { Request, Response, NextFunction } from 'express';

// Middleware for authentication
export const protect = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.headers.authorization?.split(' ')[1]; // Expected format: "Bearer <token>"
    
    if (!token) {
        res.status(401).json({ message: 'No token, authorization denied' });
        return; // End the request cycle here if no token is found
    }

    try {
        // For simplicity, we'll just check if the token is "valid-token"
        // In a real app, you'd validate the token (e.g., JWT verification)
        if (token === 'valid-token') {
            return next(); // Proceed to the next middleware or route handler
        } else {
            res.status(401).json({ message: 'Invalid token' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Middleware for role-based authorization (e.g., admin only)
export const admin = (req: Request, res: Response, next: NextFunction): void => {
    const isAdmin = req.headers['x-role'] === 'admin'; // Example header for role
    if (!isAdmin) {
        res.status(403).json({ message: 'Access denied, admin only' });
        return; // End the request cycle here if the user is not an admin
    }
    next();
};