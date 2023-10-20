<script setup lang="ts">
</script>
<template>
  <!-- component -->
  <div>
			<h1 class="mt-10 mb-5 font-bold text-3xl">Add Post</h1>
		</div>
<div class="flex items-center justify-center">

			<div class="max-w-7xl mr-20 w-full bg-white p-8 shadow-xl">
				<form>
					<!-- Post Content Section -->
					<div class="mb-6">
						<label for="postContent" class="block text-gray-700 text-md font-bold mb-2">New Post</label>
						<textarea id="postContent" name="postContent" rows="4" class="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm
          sm:leading-5 resize-none focus:outline-none focus:border-blue-500" placeholder="Start a new conversation"></textarea>
					</div>
					<!-- File Attachment Section -->
					<div>

<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
<input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file">

					</div>
					
					<!-- Submit Button and Character Limit Section -->
					<div class="flex items-center justify-end">
						<button type="submit" class="flex justify-center items-center bg-gradient-to-r from-red-500 to-orange-500 hover:bg-red-500 focus:outline-none focus:shadow-outline-blue text-white py-2 px-4 rounded-md transition duration-300 gap-2"> Post <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" id="send" fill="#fff">
								<path fill="none" d="M0 0h24v24H0V0z"></path>
								<path d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"></path>
							</svg>
						</button>
					</div>
				</form>
			</div>
		</div>
</template>