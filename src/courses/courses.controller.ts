import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './create-course.dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller('courses')
export class CoursesController {
  constructor (private coursesservice: CoursesService) {}

  @Get()
  @ApiOkResponse({description: 'List of All Courses'})
  async getCourses() {
      const courses = await this.coursesservice.getCourses();
  return courses
 }

 @Get(':courseId')
 @ApiOkResponse({description: 'List of one Course'})
  async getCourse(@Param('courseId') courseId) {
      const course = await this.coursesservice.getCourse(courseId);
  return course
 }

 @Post('')
 @ApiCreatedResponse({description: 'Added a Course'})
 async addCourse(@Body() createCourseDto: CreateCourseDto) {
     const course = await this.coursesservice.addCourse(createCourseDto);
 return course
}

@Delete()
@ApiOkResponse({description: 'Remove a Course'})
async deleteCourse(@Query() query) {
  const courses = await this.coursesservice.deleteCourse(query.courseId);
  return courses;

}
}