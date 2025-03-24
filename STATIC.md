
# Generating Static Files

This guide will help you generate static HTML, CSS, and JavaScript files from the React application.

## Steps to Generate Static Files

1. **Build the project**

   ```
   npm run build
   ```

   This will generate optimized production files in the `dist` directory.

2. **Extract static files**

   ```
   node scripts/extract-static.js
   ```

   This will copy the built files to the `static-output` directory.

3. **Use the static files**

   The `static-output` directory now contains:
   - `index.html`: The main HTML file
   - `assets/`: Directory containing all JavaScript, CSS, and other assets

   You can deploy these files to any static hosting service like GitHub Pages, Netlify, Vercel, or simply serve them from any web server.

## Serving Static Files Locally

If you want to test the static files locally, you can use any simple HTTP server. For example:

### Using Node.js and `http-server`:

1. Install `http-server` globally if you haven't already:
   ```
   npm install -g http-server
   ```

2. Navigate to the static-output directory:
   ```
   cd static-output
   ```

3. Start the server:
   ```
   http-server
   ```

4. Open your browser and go to `http://localhost:8080`

## Notes

- The static version loses React's interactive features like state management
- Client-side routing will not work in the static version without additional configuration
- All API calls will still be made to the original endpoints
