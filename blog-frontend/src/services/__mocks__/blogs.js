const blogs = [
    {
      id: '5a422a851b54a676234d17f7',
      title: 'React patterns',
      author: 'Michael Chan',
      url: 'https://reactpatterns.com/',
      likes: 7,
      user: {
        id: '5d7606e702b6ec061cc28d1c',
        name: 'Thomas Bailey',
        username:'tommy'
      }
    },
    {
      id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      user: {
        id: '5d7606e702b6ec061cc28d1c',
        name: 'Thomas Bailey',
        username:'tommy'
      }
    }
  ]
  const getAll = () => Promise.resolve(blogs)
  export default { getAll }