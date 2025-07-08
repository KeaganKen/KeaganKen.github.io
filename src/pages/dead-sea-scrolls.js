import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Book, MapPin, CheckCircle } from 'lucide-react';

const DeadSeaScrolls = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back Navigation */}
      <button
        onClick={() => navigate('/evidence')}
        className="mb-6 flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Evidence</span>
      </button>

      {/* Main Content */}
      <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="p-8 border-b border-gray-200">
          <div className="flex items-start justify-between mb-4">
            <h1 className="text-4xl font-bold text-gray-900 flex-1 mr-4">
              Dead Sea Scrolls Discovery
            </h1>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              <CheckCircle className="w-4 h-4 inline mr-1" />
              Verified
            </span>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>1947</span>
            </div>
            <div className="flex items-center space-x-1">
              <Book className="w-4 h-4" />
              <span className="font-medium text-blue-600">Isaiah 53, Psalms 119, 1QS</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>Qumran Caves, Israel</span>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            Ancient manuscripts discovered in 1947 that confirm the accuracy of biblical texts, 
            dating back to 3rd century BCE and representing one of the most significant 
            archaeological discoveries of the 20th century.
          </p>
        </div>

        {/* Detailed Content */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Discovery</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            In 1947, a young Bedouin shepherd named Muhammad edh-Dhib was searching for a lost goat 
            near the ancient settlement of Qumran when he threw a stone into a cave and heard the 
            sound of breaking pottery. This chance event led to the discovery of the first Dead Sea 
            Scroll cave, containing ancient manuscripts that would revolutionize biblical scholarship.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Was Found</h2>
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <ul className="space-y-2 text-gray-700">
              <li>• Nearly 1,000 manuscripts and manuscript fragments</li>
              <li>• Texts dating from approximately 408 BCE to 318 CE</li>
              <li>• Copies of every Old Testament book except Esther</li>
              <li>• The complete book of Isaiah (1QIsaᵃ)</li>
              <li>• Community rules and non-biblical texts</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Significance for Biblical Accuracy</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The scrolls pushed back the earliest known Hebrew manuscripts by over 1,000 years, 
            yet showed remarkable consistency with medieval texts:
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <ul className="space-y-2 text-gray-700">
              <li>• The Great Isaiah Scroll is 95% identical to the Masoretic text used today</li>
              <li>• Most variations are minor spelling differences or stylistic changes</li>
              <li>• No doctrinal differences were found in the core biblical message</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Expert Testimony</h2>
          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 mb-6">
            "The scrolls have revolutionized our understanding of the transmission of biblical texts 
            and confirmed the remarkable accuracy of the Hebrew Bible." 
            <br />
            <span className="text-sm font-medium">- Dr. Emanuel Tov, Hebrew University</span>
          </blockquote>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Further Reading</h2>
          <div className="space-y-2 text-gray-700">
            <div>• "The Complete Dead Sea Scrolls in English" by Geza Vermes</div>
            <div>• "Understanding the Dead Sea Scrolls" by Hershel Shanks</div>
            <div>• "The Dead Sea Scrolls and the Bible" by Craig A. Evans</div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                Share this evidence
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Evidence */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Related Evidence</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div 
            className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => navigate('/hezekiahs-tunnel')}
          >
            <h4 className="font-medium text-gray-900 mb-2">Hezekiah's Tunnel</h4>
            <p className="text-sm text-gray-600">Archaeological evidence of biblical engineering.</p>
          </div>
          <div 
            className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => navigate('/pontius-pilate-inscription')}
          >
            <h4 className="font-medium text-gray-900 mb-2">Pontius Pilate Inscription</h4>
            <p className="text-sm text-gray-600">Historical confirmation of Gospel accuracy.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeadSeaScrolls;