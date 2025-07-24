<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(Request $request, $articleId)
    {
        $validated = $request->validate([
            'author_name' => 'required|string|max:100',
            'content' => 'required|string',
        ]);

        $comment = Comment::create([
            'article_id' => $articleId,
            ...$validated,
        ]);

        return response()->json($comment, 201);
    }
}
