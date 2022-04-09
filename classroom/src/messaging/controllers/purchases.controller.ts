import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CoursesService } from 'src/services/courses.service';
import { EnrollmentsService } from 'src/services/enrollments.service';
import { StudentsService } from 'src/services/students.service';

interface CustomerTPayload {
  authUserId: string;
}

interface ProductPayload {
  id: string;
  title: string;
  slug: string;
}

export interface PurchaseCreatePayload {
  customer: CustomerTPayload;
  product: ProductPayload;
}

@Controller()
export class PurchaseController {
  constructor(
    private studentsService: StudentsService,
    private coursesService: CoursesService,
    private enrollmentsService: EnrollmentsService,
  ) {}

  @EventPattern('purchases.new-purchase')
  async pruchaseCreate(@Payload('value') purchase: PurchaseCreatePayload) {
    const student = await this.studentsService.getStudentByAuthUserId(
      purchase.customer.authUserId,
    );

    if (!student) {
      await this.studentsService.createStudent({
        authUserId: purchase.customer.authUserId,
      });
    }

    let course = await this.coursesService.getCourseBySlug(
      purchase.product.slug,
    );

    if (!course) {
      course = await this.coursesService.createCourse({
        title: purchase.product.title,
        slug: purchase.product.slug,
      });
    }

    await this.enrollmentsService.createEnrollment({
      courseId: course.id,
      studentId: student.id,
    });
  }
}
