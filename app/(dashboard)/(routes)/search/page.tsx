import { Suspense } from 'react'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

import { db } from '@/lib/db'
import { Categories } from './_component/category'
import { SearchInput } from '@/components/search-input'
import { getCourses } from '@/actions/get-courses'
import CoursesList from '@/components/course-list'

// Force dynamic rendering — this page uses auth + searchParams + DB queries
export const dynamic = 'force-dynamic'

interface SearchPageProps {
  searchParams: Promise<{
    title: string
    categoryId: string
  }>
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const { userId } = await auth()

  if (!userId) {
    return redirect('/sign-in')
  }

  const categories = await db.category.findMany({
    orderBy: {
      name: 'asc',
    },
  })

  const courses = await getCourses({
    userId,
    ...(await searchParams),
  })

  return (
    <>
      <div className="block px-6 pt-6 md:mb-0 md:hidden">
        <Suspense>
          <SearchInput />
        </Suspense>
      </div>
      <div className="space-y-4 p-6">
        <Suspense>
          <Categories items={categories} />
        </Suspense>
        <CoursesList items={courses} />
      </div>
    </>
  )
}

export default SearchPage
