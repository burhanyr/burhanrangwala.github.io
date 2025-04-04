"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { motion } from "framer-motion"

interface VideoComponentProps {
  videoId: string
}

export default function VideoComponent({ videoId }: VideoComponentProps) {
  const [showVideo, setShowVideo] = useState(false)
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  return (
    <div className="w-full">
      {!showVideo ? (
        <motion.div
          className="relative w-full rounded-lg overflow-hidden cursor-pointer shadow-md"
          style={{ paddingBottom: "56.25%" }} // 16:9 aspect ratio
          onClick={() => setShowVideo(true)}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={thumbnailUrl || "/placeholder.svg"}
            alt="Video thumbnail"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-blue-900/30 backdrop-blur-sm">
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
              <Button
                className="rounded-full w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 flex items-center justify-center shadow-lg"
                onClick={() => setShowVideo(true)}
              >
                <Play className="h-10 w-10 text-white" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="w-full rounded-lg overflow-hidden shadow-lg"
          style={{ paddingBottom: "56.25%" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      )}
    </div>
  )
}

