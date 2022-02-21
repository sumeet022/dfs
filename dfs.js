/// Stack based approach
const dfs = (graph,source) =>{

    const stack = [source];
    while (stack.length>0){

        console.log(stack);
        const current=stack.pop();
        console.log(current);
        for (let neighbour of graph[current]){
            stack.push(neighbour);
            console.log(stack);
            console.log(current);

        }

    }
}

/// recursive approach

// const dfs = (graph,source) => {
//
//     console.log(source);
//
//     for(let neighbour of graph[source]){
//
//         dfs(graph,neighbour);
//     }
//
// }

const graph = {
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
};

dfs(graph,'a');
