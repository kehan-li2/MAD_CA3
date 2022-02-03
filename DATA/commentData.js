// P2111575
// Li KeHan
// DIT1B04
// commentData.js

let commentData = [
  {
    id: '1',
    data: {
      userImage: require('../image/user2.png'),
      name: 'Mike',
      time: 'Mon Jan 12 13:45:08 2021',
      comment: 'Berry and yoghurt are so tasty',
    },
  },
  {
    id: '2',
    data: {
      userImage: require('../image/user3.png'),
      name: 'Mary',
      time: 'Wed Jan 24 12:24:23 2021',
      comment: 'I like this recipe! Taste good!',
    },
  },
  {
    id: '3',
    data: {
      userImage: require('../image/user4.png'),
      name: 'Lisa',
      time: 'Fri Feb 25 05:02:24 2021',
      comment: 'Easy made recipe, taste good!',
    },
  },
  {
    id: '4',
    data: {
      userImage: require('../image/user5.png'),
      name: 'Harryyyyyyy',
      time: 'Mon May 18 08:23:45 2022',
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

export {commentData};
export default addComment;
