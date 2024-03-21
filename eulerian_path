/**
 * @param {int32} n
 * @param {list_list_int32} edges
 * @return {bool}
 */
function check_if_eulerian_path_exists(n, edges) {
    // Write your code here.
    
    // Initialize array to count degrees incident of n vertices
    let degrees = new Array(n).fill(0);
    let oddDegrees = 0;
    
    // Iterate over number of edges
    for (let i = 0; i < edges.length; i++) {
        let edge = edges[i];
        
        // Count degrees incident of vertices
        degrees[edge[0]]++;
        degrees[edge[1]]++;
    }
    
    // Iterate over degrees
    for (let j = 0; j < degrees.length; j++) {
        
        // Eulerian circuits exist when all degrees of each vertex are even
        // Check if each degree is NOT even
        if (degrees[j] % 2 !== 0) {
            // Increment odd degrees
            oddDegrees++;
            
            // Eulerian path exists when a graph has zero or two vertices of an odd degree
            // Check if there are more than two odd vertices
            if (oddDegrees > 2) {
                return false;
            }
        }
    }
    
    return true;
}
