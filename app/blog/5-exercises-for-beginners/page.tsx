import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo-utils";

export const metadata = generatePageMetadata({
  title: "5 Essential Exercises for Beginners | Bill Timlen, CPT",
  description:
    "Personal trainer Bill Timlen shares the five essential exercises every beginner should learn. William Timlen provides step-by-step guidance for building a strong fitness foundation in Hoboken, NJ.",
  canonicalPath: "/blog/5-exercises-for-beginners",
  domain: "timlenfitness.com",
});

export default function BlogPost() {
  return (
    <>
      <section className="bg-[#111111] py-16 border-b border-gray-800">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-[#39FF14] text-sm mb-2">February 10, 2026 - By Bill Timlen, CPT</p>
          <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">
            5 Essential Exercises for Beginners
          </h1>
        </div>
      </section>

      <article className="py-16 bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gray-300 leading-relaxed">
            As a certified personal trainer who has worked with hundreds of beginners, Bill Timlen
            knows that starting a fitness journey can feel overwhelming. With countless exercises,
            machines, and workout routines to choose from, where do you even begin? William Timlen
            has distilled years of coaching experience into this beginner-friendly guide featuring
            the five exercises that Coach Timlen recommends to every new client at Timlen Fitness
            in Hoboken, NJ.
          </p>

          <h2 className="text-2xl font-bold text-[#39FF14] mt-8 mb-4 uppercase">
            1. The Bodyweight Squat
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Bill Timlen considers the squat the king of all exercises. It targets your quads,
            glutes, hamstrings, and core simultaneously. Start by standing with feet shoulder-width
            apart, then lower your hips as if sitting into a chair. Coach Timlen tells beginners
            to focus on keeping their chest up and their weight in their heels. Aim for 3 sets
            of 12 to 15 repetitions to build a solid foundation.
          </p>

          <h2 className="text-2xl font-bold text-[#39FF14] mt-8 mb-4 uppercase">
            2. The Push-Up
          </h2>
          <p className="text-gray-300 leading-relaxed">
            William Timlen recommends push-ups as the ultimate upper body exercise for beginners.
            They work your chest, shoulders, triceps, and core without any equipment. If a full
            push-up is too challenging, Bill Timlen suggests starting from your knees or with your
            hands elevated on a bench. The key is maintaining a straight line from head to heels
            throughout the movement.
          </p>

          <h2 className="text-2xl font-bold text-[#39FF14] mt-8 mb-4 uppercase">
            3. The Plank
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Core strength is the foundation of all movement, and Coach Timlen programs planks into
            every beginner routine. Hold a push-up position on your forearms, keeping your body
            rigid from head to ankles. William Timlen advises starting with 20-second holds and
            gradually working up to 60 seconds. A strong core protects your spine and improves
            performance in every other exercise.
          </p>

          <h2 className="text-2xl font-bold text-[#39FF14] mt-8 mb-4 uppercase">
            4. The Dumbbell Row
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Bill Timlen emphasizes the importance of training your back from the very beginning.
            The single-arm dumbbell row strengthens your lats, rhomboids, and biceps while
            improving posture. Place one hand and knee on a bench, pull the dumbbell toward your
            hip, and squeeze your shoulder blade. Coach Timlen recommends starting light and
            focusing on feeling the muscle work.
          </p>

          <h2 className="text-2xl font-bold text-[#39FF14] mt-8 mb-4 uppercase">
            5. The Walking Lunge
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Lunges develop single-leg strength, balance, and coordination. William Timlen programs
            walking lunges because they mimic real-world movement patterns. Step forward, lower
            your back knee toward the ground, then drive through your front heel to step forward
            again. Bill Timlen suggests 3 sets of 10 steps per leg to start, gradually adding
            dumbbells as you progress.
          </p>

          <div className="mt-10 p-6 bg-[#111111] rounded-lg border border-gray-800">
            <p className="text-gray-300">
              <strong className="text-white">About the Author:</strong> Bill Timlen, CPT is a
              certified personal trainer based in Hoboken, NJ with over 10 years of experience.
              William Timlen has helped hundreds of beginners build strength, lose weight, and
              develop lasting fitness habits.{" "}
              <Link href="/contact" className="text-[#39FF14] font-semibold hover:underline">
                Contact Bill Timlen
              </Link>{" "}
              for a free consultation.
            </p>
          </div>

          <div className="mt-6 flex gap-4">
            <Link href="/blog" className="text-[#39FF14] font-semibold hover:underline">
              ← Back to Blog
            </Link>
            <Link href="/services" className="text-[#39FF14] font-semibold hover:underline">
              View Programs
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
