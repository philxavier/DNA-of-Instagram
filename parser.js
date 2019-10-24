let inputJSON = require("./test.json");

let getAverageImpressions = inputJSON => {
  // Impressions: The number of times your content, whether a post or a story, was shown to users.
  // PSEUDOCODE
  // create variable total = 0
  // loop through JSON array (each element is 'data')
  // get the value of "description": "Total number of times the media object has been seen", (data[0].values[0].value)
  // add number to total variable
  // divide number by number of posts - length of inputJSON
  let total = 0;
  for (let i = 0; i < inputJSON.length; i++) {
    let post = inputJSON[i];
    let impressionOfPostValue = post.data[0].values[0].value;
    total += impressionOfPostValue;
  }
  return total / inputJSON.length;
};

let getAverageEngagement = inputJSON => {
  let total = 0;
  for (let i = 0; i < inputJSON.length; i++) {
    let post = inputJSON[i];
    let impressionOfPostValue = post.data[1].values[0].value;
    console.log(impressionOfPostValue);
    total += impressionOfPostValue;
  }
  return total / inputJSON.length;
};

let calculateEngagementRate = () => {
  //PSEUDOCODE
  //Calculate the average engagement - use function built previously;
  //divide the average engagement by number of followers 430;

  let averageEngagement = getAverageEngagement(inputJSON);
  let numOfFollowers = 430;
  let engagementRate = averageEngagement / numOfFollowers;
  return engagementRate;
};
