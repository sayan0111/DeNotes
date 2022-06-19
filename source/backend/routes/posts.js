const router=require("express").Router()
const postController=require("../controllers/postController")




router.get("/",postController.post_all)

router.get("/:postId",postController.post_details)


router.post("/",postController.post_create)


router.put("/:postId",postController.post_update)

router.delete("/:productId",postController.post_delete)



module.exports = router