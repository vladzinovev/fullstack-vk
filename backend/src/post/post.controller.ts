@Controller('comment')
export class PostController{
    constructor(private readonly commentService: PostService){}
}