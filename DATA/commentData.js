let commentData = [
  {
    id: '1',
    data: {
      userImage: require('../image/user2.png'),
      name: 'Mike',
      time: '19-10-2021 10:58am',
      comment: 'Berry and yoghurt are so tasty',
    },
  },
  {
    id: '2',
    data: {
      userImage: require('../image/user3.png'),
      name: 'Mary',
      time: '20-11-2021 9:58am',
      comment: 'I like this recipe! Taste good!',
    },
  },
  {
    id: '3',
    data: {
      userImage: require('../image/user4.png'),
      name: 'Lisa',
      time: '23-12-2021 5:38pm',
      comment: 'Easy made recipe, taste good!',
    },
  },
  {
    id: '4',
    data: {
      userImage: require('../image/user5.png'),
      name: 'Harry',
      time: '01-01-2022 4:23pm',
      comment: 'Delicious to the core! My favourite recipe!',
    },
  },
];

const addComment = newComment => {
  commentData.push({
    id: (commentData.length + 1).toString(),
    data: {
      userImage: require('../image/user.png'),
      name: newComment.name,
      time: newComment.time,
      comment: newComment.comment,
    },
  });
};
// addComment({
//   // id: '4',
//   // data: {
//   // userImage: require('../image/user5.png'),
//   name: 'Harry',
//   time: '01-01-2022 4:23pm',
//   comment: 'Delicious to the core!',
// });

// console.log(commentData);
export {commentData};
export default addComment;
