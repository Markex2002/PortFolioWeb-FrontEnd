FROM node:alpine AS builder



# Production stage with Nginx
FROM nginx:alpine

# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy built application from builder stage
COPY --from=builder /app/dist/app-portfolio/browser /usr/share/nginx/html

# Copy custom nginx configuration (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
