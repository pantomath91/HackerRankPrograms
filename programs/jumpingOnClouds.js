// Emma is playing a new mobile game that starts with consecutively numbered clouds.Some of the clouds are thunderheads and others are cumulus.She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2.She must avoid the thunderheads.Determine the minimum number of jumps it will take Emma to jump from her starting position to the last cloud.It is always possible to win the game.
// For each game, Emma will get an array of clouds numbered 0 or 1 if they are safe or  if they must be avoided.For example, c=[0,1,0,0,0,1,0] indexed from 0....6.The number on each cloud is its index in the list so she must avoid the clouds at indexes 1 and 5.She could follow the following two paths:0->2->4->6 or 0->2->3->4->6.The first path takes  jumps while the second takes 4.

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let jumpCount = 0;
    for (let i = 0; i < c.length; i++) {
        if (c[i] === 0) {
            if (c[i + 1] == 0) {
                if (c[i + 2] == 0) {
                    jumpCount++;
                    i = (i + 2) - 1;
                }
                else {
                    jumpCount++;
                    i = (i + 1) - 1;
                }
            }
            else if (c[i + 2] == 0) {
                jumpCount++;
                i = (i + 2) - 1;
            }
        }
    }
    return jumpCount;
}

console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]));