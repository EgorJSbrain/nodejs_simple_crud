import Post from './Post.js'
import FileService from './FileService.js'


class PostService {
  async create(post, picture) {
    const pathName = FileService.createFile(picture)
    const creatdedPost = await Post.create({ ...post, picture: pathName })

    return creatdedPost
  }

  async getAll () {
    const posts = await Post.find()

    return posts
  }

  async getOne (id) {
    if(!id) {
      throw new Error("Id didn't path" )
    }
    const post = await Post.findById(id)

    return post
  }

  async update (post) {
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true })

    return updatedPost
  }

  async delete (id) {
    const deletedPost = await Post.findByIdAndDelete(id)

    return deletedPost
  }
}

export default new PostService()
